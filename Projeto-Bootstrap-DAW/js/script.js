// init isotope
var $grid =  $('.collection-list').isotope({
    
});
// filtrar itens clicando no botão
$('.filtrar-grupo-botoes').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    resetFilterBtns();
    $(this).addClass('ativar-filtro-btn')
    $grid.isotope({ filter: filterValue });
});

var filterBtns = $('.filtrar-grupo-botoes').find('button');
function resetFilterBtns(){
    filterBtns.each(function(){
        $(this).removeClass('ativar-filtro-btn');
    });
}

function alerta() {
    alert("Funcionalidade indisponível no momento!")
}