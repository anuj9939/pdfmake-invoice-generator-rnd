(function (window) {
  window.__env = window.__env || {};

  // API url
  window.__env.apiUrl = 'https://telerad.icareinfosystems.com:8443/lms/';

  // Notification API url
  window.__env.notificationApiURL = 'https://telerad.icareinfosystems.com:8443/icare-notification/';

  // Razorpay Details
  window.__env.companyImageURL = 'https://www.linkpicture.com/q/paymentPageLogo.png';
  window.__env.razorpayKey = 'rzp_test_ZzBQiOnz0VgZdT';
  window.__env.merchantCompanyName = 'G S Neuroscience Clinic and Research Centre Pvt. Ltd.'
  window.__env.merchantCompanyDescription = 'Consultation fees of appointment';
  window.__env.merchantEmailID = 'gsneuroscience@gmail.com';
  window.__env.merchantBrandColor = '#114c98';
  window.__env.merchantCompanyAddress = 'G S Neuro Science Payment Page'

  // Export excel author name 
  window.__env.excelAuthorName = 'iCare Infosystems Private Limited';

  // Whether or not to enable debug mode
  // Setting this to false will disable console output
  window.__env.enableDebug = true;
}(this));