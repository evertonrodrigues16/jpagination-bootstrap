var memory;
var numberPages;
var numIdActive=1;
var btnId;
var all;

function block(btnId){
    document.getElementById(btnId).className = 'disabled';
}
function unlock(btnId){
    document.getElementById(btnId).className = '';
}

function splitItems(arg, perPage, btnIdArg) {
    btnId = btnIdArg;
    switch (arg){
        case -2:
            //verificar se o memory é diferente nulo, ou seja não estou na 1ª casa
            if (memory!=null){
              //se não é null mesmo assim ainda posso estar na primeira casa
              //verificar se já estou na primeira casa
              if (memory==perPage){
                  //se sim, não fazer nada                            
              }
              else{
                //se não é null e se ainda não estou na primeira casa
                //atualizo a paginação de memory
                memory -= perPage;
                //exibo os items
                showItems(perPage);

              }
            }else{//se já estou na primeira casa preciso apenas atribuir o perPage ao memory
                memory=perPage;                        
            }
        break;
        case -1:
            //verificar se estou avançando da primeira página
            if (memory==null || memory==perPage){
                //se estou na 1 casa, devo atribuir o perPage*2 ao memory, para que possa ir para a próxima pagina
                memory=(perPage*2);
                //e em seguida exibo os items
                showItems(perPage);
            }
            else{//se não estou na 1 primeira casa
            //procuro saber se estou na ultima
                if((memory/perPage) == numberPages){
                    //se sim não faço nada
                }
                else{//se não estou na ultima casa
                    //devo incrementar o memory em mais um perPage
                    memory+=perPage;
                    //e em seguida exibir os items
                    showItems(perPage);
                
                }
            
            }                        
        break;
        default:
            //se cliquei no botão numerico
            //irei receber o argumento até o qual farei o loop para exibir os items
            memory = arg;
            showItems(perPage);
        break;                    
    }
    //verificar se memory é igual a perPage ou seja primeira pagina
    if(memory==perPage){
    //se sim bloquei botão previous
        block('btnPrevious');
    }
    else{
    //se não desbloqueia
        unlock('btnPrevious');
    }
    //verificar se está na ultima página
    if ((memory/perPage) == numberPages){
    //se sim bloqueia o botão next
        block('btnNext');              	
    }
    else{
    //se não desbloqueia
        unlock('btnNext');
    }
}
function activate(btnId){
	
    
    if(btnId == 'next'){
    	numIdActive += 1;
    	btnId = 'btn' + numIdActive;
    }
    else{
    	if(btnId == 'previous'){
        	numIdActive -= 1;
        	btnId = 'btn' + numIdActive;
        }
        else{
        	numIdActive = btnId;
        	btnId = 'btn' + numIdActive;
        }
    }
    //alert(btnId);
    
    //btnId = 'btn' + numIdActive;
    var dom = document.getElementsByClassName("btn-pagination");
    
    for(var i=0;i<dom.length;i++)
    {
        dom[i].className = 'btn-pagination';
    }
    document.getElementById(btnId).className += ' active';

}
function showItems(perPage){
    var dom = document.getElementsByClassName("item");
    for(var i=0;i<dom.length;i++)
    {
        dom[i].style.display = 'none';
    }
    var cont=0;
    if (memory>all){
        cont = all;
    }
    else{
        cont=memory;
    }
    for (var i = (memory-perPage); i < cont; i++)
    {
        dom[i].style.display = 'block';
    }
    activate(btnId);
}
function showFirstItens(perPage){
    var dom = document.getElementsByClassName("item");
    for(var i=0;i<perPage;i++)
    {
        dom[i].style.display = 'block';
    }
}

function generate(divId, allItems, perPage){
    numberPages = Math.ceil(allItems/perPage);
    all = allItems;
    var dom = document.getElementById(divId);
    var arg = 0;
    dom.innerHTML = '';

    for (var i=0; i<numberPages; i++)
    {
        arg += perPage;
        var act='';
        if (i==0){act=' active'}
        
        var text = '<li id="btn' + (i+1) + '" class="btn-pagination'+act+'"><a href="#portfolio" onclick="splitItems('+ arg +', ' + perPage + ', ' + (i+1) + ')">' + (i+1) + '<span class="sr-only">(current)</span></a></li>';
        dom.innerHTML += text;
    }
    var header = '<li id="btnPrevious" class="disabled"><a href="#portfolio" onclick="splitItems(-2, ' + perPage + ', \'previous\')" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>';
    
    var footer = '<li id="btnNext"><a href="#portfolio" onclick="splitItems(-1, ' + perPage + ', \'next\')" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>';
    dom.innerHTML = header + dom.innerHTML + footer;

    showFirstItens(perPage);
}