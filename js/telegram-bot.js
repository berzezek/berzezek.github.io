$(function () {
  const customerName = $('#customerName');
  const customerPhone = $('#customerPhone');
  const customerMessage = $('#customerMessage');

  $('#sendBtn').on('click', function () {
    const token = '7143976495:AAG34SkJURU4kMgdU3bvmXlzIvgRectCCUk';
    const chatId = '88938160';
    const message = `Имя: ${customerName.val()}\nТелефон: ${customerPhone.val()}\nСообщение: ${customerMessage.val()}`;

    $.ajax({
      url: `https://api.telegram.org/bot${token}/sendMessage`,
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
      success: function (data) {
        console.log('Сообщение отправлено:', data);
        Swal.fire({
          title: 'Отлично!',
          text: 'Ваше сообщение отправлено!',
          icon: 'Спасибо',
        });
      },
      error: function (error) {
        console.error('Ошибка отправки сообщения:', error);
        Swal.fire({
          title: 'Упс!',
          text: 'Что то пошло не так ;(',
          icon: 'error',
          confirmButtonText: 'Сейчас позвоню!',
        });
      },
    });
  });
});
