$(document).ready(function () {
    $(".dws-form").on("click", ".tab", function () {
      // Удаляем классы active
        $(".dws-form").find(".active").removeClass("active");

       //Добавляем класс active
        $(this).addClass("active");
        $(".tab-form").eq($(this).index()).addClass("active");

  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const password2 = document.getElementById("password2");

  // Проверяем адрес электронной почты на правильность
    });
});