package eg.englimensh.app;

import android.content.ContentValues;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.provider.MediaStore;
import android.util.Base64;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.io.OutputStream;

@CapacitorPlugin(name = "PdfDownload")
public class PdfDownloadPlugin extends Plugin {
    @PluginMethod
    public void save(PluginCall call) {
        String fileName = call.getString("fileName");
        String base64Data = call.getString("base64Data");
        if (fileName == null || fileName.trim().isEmpty() || base64Data == null || base64Data.isEmpty()) {
            call.reject("اسم الملف أو بيانات PDF غير متوفرة");
            return;
        }

        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.Q) {
            call.reject("حفظ PDF إلى مجلد التنزيلات يتطلب Android 10 أو أحدث");
            return;
        }

        OutputStream output = null;
        Uri fileUri = null;
        try {
            byte[] pdfBytes = Base64.decode(base64Data, Base64.DEFAULT);
            if (pdfBytes.length < 8 ||
                    pdfBytes[0] != '%' || pdfBytes[1] != 'P' ||
                    pdfBytes[2] != 'D' || pdfBytes[3] != 'F' || pdfBytes[4] != '-') {
                call.reject("بيانات الشهادة ليست ملف PDF صالحًا");
                return;
            }
            ContentValues values = new ContentValues();
            values.put(MediaStore.MediaColumns.DISPLAY_NAME, fileName);
            values.put(MediaStore.MediaColumns.MIME_TYPE, "application/pdf");
            values.put(MediaStore.MediaColumns.RELATIVE_PATH,
                    Environment.DIRECTORY_DOWNLOADS + "/EngliMensh");
            values.put(MediaStore.MediaColumns.IS_PENDING, 1);

            fileUri = getContext().getContentResolver().insert(
                    MediaStore.Downloads.EXTERNAL_CONTENT_URI, values);
            if (fileUri == null) {
                call.reject("تعذر إنشاء ملف الشهادة في مجلد التنزيلات");
                return;
            }

            output = getContext().getContentResolver().openOutputStream(fileUri);
            if (output == null) {
                getContext().getContentResolver().delete(fileUri, null, null);
                call.reject("تعذر فتح ملف الشهادة للكتابة");
                return;
            }
            output.write(pdfBytes);
            output.flush();
            output.close();
            output = null;

            ContentValues completed = new ContentValues();
            completed.put(MediaStore.MediaColumns.IS_PENDING, 0);
            getContext().getContentResolver().update(fileUri, completed, null, null);

            JSObject result = new JSObject();
            result.put("uri", fileUri.toString());
            result.put("fileName", fileName);
            call.resolve(result);
        } catch (Exception error) {
            try {
                if (output != null) output.close();
                if (fileUri != null) getContext().getContentResolver().delete(fileUri, null, null);
            } catch (Exception ignored) { }
            call.reject("فشل حفظ الشهادة بصيغة PDF: " + error.getMessage(), error);
        }
    }
}
