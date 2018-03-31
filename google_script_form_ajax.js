var $form = $('contact'),
    url = 'https://script.google.com/macros/s/AKfycbzxlnsuhjyVciRJIo7WzH8tc67TiG_NDrfj9elkyfL_zCF9kyWB/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})