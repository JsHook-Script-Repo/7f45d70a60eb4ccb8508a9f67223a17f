var currentPackageName = common.getlpparam().packageName;
if (currentPackageName == 'com.adobe.reader') {
    common.hookMethod('com.adobe.libs.services.auth.SVServicesAccount', 'isEntitledForService', ['com.adobe.libs.services.utils.SVConstants$SERVICE_TYPE'], function (param) {
        param.setResult(java.lang.Boolean.valueOf('true'));
    });
}
    
