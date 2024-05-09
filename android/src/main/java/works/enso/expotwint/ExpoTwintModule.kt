package works.enso.expotwint

import android.app.Activity
import android.content.Intent
import android.os.Bundle
import expo.modules.kotlin.Promise
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import org.json.JSONObject

data class TwintDTO(val extras: Bundle) {
    fun getValues(): String {
        val jsonObj = JSONObject()
        jsonObj.put("state", extras.getString("state"))
        jsonObj.put("nonce", extras.getString("nonce"))
        jsonObj.put("scope", extras.getString("scope"))
        return jsonObj.toString()
    }
}

class ExpoTwintModule : Module() {
    override fun definition() = ModuleDefinition {
        Name("ExpoTwint")

        AsyncFunction("getActivityDetails") { promise: Promise->
            val activity = appContext.activityProvider?.currentActivity
            val extras = activity?.intent?.extras;
            if (extras != null) {
              val twt = TwintDTO(extras)
              promise.resolve(twt.getValues())

            }
        }


        AsyncFunction("endActivity") { twintToken: String, status: String?, state: String?, promise: Promise ->
            val activity = appContext.activityProvider?.currentActivity
            val resultIntent = Intent();
            if (state == "CANCEL" && activity != null) {
                resultIntent.putExtra("canceled", true);
                activity.setResult(Activity.RESULT_CANCELED, resultIntent);
                activity.finish();
            }
            if (state == "ERROR" && activity != null) {
                resultIntent.putExtra("errorCode", status);
                resultIntent.putExtra("state", twintToken)
                activity.setResult(Activity.RESULT_CANCELED, resultIntent)
                activity.finish()
            }
            if (state == "SUCCESS" && activity != null) {
                resultIntent.putExtra("code", status);
                resultIntent.putExtra("state", twintToken);
                activity.setResult(Activity.RESULT_OK, resultIntent)
                activity.finish()
            }

        }

    }
}
