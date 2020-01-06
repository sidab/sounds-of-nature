Framework7.registerComponent('list-item', {
    template: `

        <div class="col-50 medium-50 item" data-name="{{$props.name}}" data-audio="{{$props.audio}}" data-image="{{$props.image}}" style="background-image: url('{{$props.image}}')">
            
            <div class="preloader-block text-align-center display-none">
            
                <div class="preloader color-white"></div>
    
            </div>
    
            <i class="icon f7-icons pause">pause_fill</i>
            
            <i class="icon f7-icons play">play_fill</i>
            
            <div class="range-slider-out">
            
                <div class="range-slider color-white range-slider-init" data-value="1.0" data-min="0.0" data-max="1.0" data-step="0.01"></div>
            
            </div>
            
        </div>
    
    `
});