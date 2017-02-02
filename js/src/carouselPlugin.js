(function($) {
    
    $.fn.carouselPlugin = function (options){
        var leftUIEl = this.find('.carousel-arrow-left');
        var rightUIEl = this.find('.carousel-arrow-right');
        var carouselHider = this.find('.carousel-hider');
        var carouselElement = this.find('.carousel-element');
        var carouselList = this.find('.carousel-list');

        //рассчитываем максимальную ширину картинки в карусели    
        var itemMaxWidth = ( options.carouselWidth - options.itemMarginRight*(options.itemNumberInWindow - 1) ) / options.itemNumberInWindow;

        //Добавляем CSS свойства для соответствующих элементов карусели
        carouselHider.width(options.carouselWidth);
        carouselElement.css('margin-right', options.itemMarginRight);
        carouselElement.find('img').css('max-width', itemMaxWidth);
    
        
        var pixelsOffset = itemMaxWidth+options.itemMarginRight;
        var currentLeftValue = 0;
        var elementsCount = carouselList.find('li').length;
            carouselList.width(elementsCount*pixelsOffset); //вычисляем и добавляем ширину всей карусели
        var minimumOffset = - ((elementsCount - options.itemNumberInWindow) * pixelsOffset);
        var maximumOffset = 0;
     
        leftUIEl.click(function() {        
            if (currentLeftValue != maximumOffset) {
                currentLeftValue += pixelsOffset;
                carouselList.animate({ left : currentLeftValue + "px"}, options.animateDuration);
            }        
        });
     
        rightUIEl.click(function() {        
            if (currentLeftValue != minimumOffset) {
                currentLeftValue -= pixelsOffset;
                carouselList.animate({ left : currentLeftValue + "px"}, options.animateDuration);
            }        
        }); 
    }

})(jQuery)











                                            



































