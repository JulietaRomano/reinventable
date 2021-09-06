window.onload = function(){
    $('#preloader').fadeOut();
    $('body').removeClass('hidden');
}


$( document ).ready(function() {
    function desplegarPlanetas(){

        let contador = 0;

        $('.planetasBoton').click(function (e) { 
            e.preventDefault();

            if (contador == 0){
                $('#planetasSection').removeClass("block");
                contador = 1;
            }
            else{
                $('#planetasSection').addClass("block");
            contador = 0;
            }
        });
    }
    function desplegarFotografias(){

        let contador = 0;

        $('.retratosBoton').click(function (e) { 
            e.preventDefault();

            if (contador == 0){
                $('#retratosSection').removeClass("block");
                contador = 1;
            }
            else{
                $('#retratosSection').addClass("block");
            contador = 0;
            }
        });
    }


    function desplegarLunas(){

        let contador = 0;

        $('.lunasBoton').click(function (e) { 
            e.preventDefault();

            if (contador == 0){
                $('#lunasSection').removeClass("block");
                contador = 1;
            }
            else{
                $('#lunasSection').addClass("block");
            contador = 0;
            }
        });
    }

desplegarPlanetas()
desplegarFotografias()
desplegarLunas()
});
