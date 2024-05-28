
const sgMail = require('@sendgrid/mail');
const apiKey = "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";
const fromMail = "muhammadboycha@gmail.com"
const tempId = "d-b9d38e4d2db041228c3180934e58061e";
const sendCustomMail = async (toMail,name,mobile)=>{
    try {
        sgMail.setApiKey(apiKey);
        const msg = {
        to: toMail,
        from: {
            name:"Todo App",
            email:fromMail
        }, // Use the email address or domain you verified above
        templateId:tempId,
        dynamicTemplateData: {
            name: name,
            mobile: mobile
        }
        };

        const result = await sgMail.send(msg);
        return result;

      } catch (error) {
        return error;
      }

}

module.exports = sendCustomMail;
