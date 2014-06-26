$(function() {
    var config = {
        background: {
            id: '#background',
            color: '#00FFA8',
            duration: 500
        },
        header: {
            id: '#header',
            navigation: {
                color: '#fff',
                duration: 500
            }
        },
        logo: {
            id: '#logo',
            color: '#fff',
            container: {
                size: 110
            },
            strokeWidth: 15,
            duration: 500
        }
    }
    
    var background = {
        snap: Snap(config.background.id),
        jquery: $(config.background.id)
    }
    
    var header = {
        snap: Snap(config.header.id),
        jquery: $(config.header.id)
    }
    
    var logo = {
        snap: Snap(config.logo.id),
        jquery: $(config.logo.id)
    }
    
    var logo = {
        snap: Snap(config.logo.id),
        jquery: $(config.logo.id)
    }
    
    /* FURTHER CONFIGURATION */
    
    config.logo.container.cx = header.jquery.offset().left + config.logo.container.size
    config.logo.container.cy = header.jquery.offset().top + (header.jquery.height() / 2)
    
    /* BACKGROUND */
    
    background.snap.rect(0, 0, background.jquery.width(), background.jquery.height())
    .attr({
        opacity: 0,
        fill: config.background.color
    })
    .animate({
        opacity: 1
    }, config.background.duration)
    
    /* HEADER */
    
    header.snap.rect(header.jquery.width(), 0, 0, header.jquery.height())
    .attr({
        fill: config.header.navigation.color
    })
    .animate({
        x: 0,
        width: header.jquery.width()
    }, config.header.navigation.duration)
    
    header.snap.text(config.logo.container.cx + config.logo.container.size, header.jquery.offset().top, 'Navigation')
    
    /* LOGO */
    
    var logoHorizontal = parseInt(0.25 * Math.sqrt(3) * config.logo.container.size)
    
    logo.polygon = logo.snap.polygon([
        config.logo.container.cx,
        config.logo.container.cy - (config.logo.container.size / 2),
        
        config.logo.container.cx + logoHorizontal,
        config.logo.container.cy - (config.logo.container.size / 4),
        
        config.logo.container.cx + logoHorizontal,
        config.logo.container.cy + (config.logo.container.size / 4),
        
        config.logo.container.cx,
        config.logo.container.cy + (config.logo.container.size / 2),
        
        config.logo.container.cx - logoHorizontal,
        config.logo.container.cy + (config.logo.container.size / 4),
        
        config.logo.container.cx - logoHorizontal,
        config.logo.container.cy - (config.logo.container.size / 4)
    ])
    .attr({
        fill: config.background.color,
        stroke: config.logo.color,
        strokeWidth: 0
    })
    .animate({
        strokeWidth: config.logo.strokeWidth
    }, config.logo.duration)
    .hover(function() {
        var fullrotation = new Snap.Matrix()
        fullrotation.rotate(90, config.logo.container.cx, config.logo.container.cy)
        
        logo.polygon.animate({
            transform: fullrotation
        }, config.logo.duration)
    }, function() {
        var fullrotation = new Snap.Matrix()
        fullrotation.rotate(0, config.logo.container.cx, config.logo.container.cy)
        
        logo.polygon.animate({
            transform: fullrotation
        }, config.logo.duration)
    })
})
