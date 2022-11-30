$(document).ready(function(){    
    
    $.getJSON("tableBoard.json", function(data){
        console.log(data);

        /** 
         *  하나의 문자열을 만드는 방법
         */
        for(let i=0; i<data.length; i++){            
            var row = "<tr>";
            row +="<td>" + data[i].no + "</td>";
            row +="<td class='table-title'><a href='#'>" + data[i].title + "</a></td>";
            row +="<td>" + data[i].reg + "</td>";
            row +="<td>" + data[i].view + "</td>";

            if(data[i].file == 'Y'){
                row +="<td><img src='paper-clip.png'></td>";
            }
            row += "</tr>";

            $(".table-body").append(row);
        }
    });  
    
    $('.pagination a').click(function(){
        $(this).siblings("a").removeClass("active");
        $(this).addClass("active");        
    });
});

