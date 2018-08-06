# lazyload-image-scroll

## Instalación

```
npm install lazyload-image-scroll
```
## Uso

Este codigo sirve para hacer un lazy load de las imagenes cuando se haga un scroll o un resize se cargara la imagen cuando empieze ser visible en la pantalla antes no, en el src pondremos la imagen con menos calidad y en el data-src y data-srcset pondremos la imagen que queremos mostrar cuando llege el scroll.

Se que cargamos innecesariamente 2 imagenes, pero tenemos que tener en cuanta que una tiene que se con la menor resolucion posible para que pese lo minimo, pero ganamos el no bloquear contenido por culpa del javascript ya que siempre tendremos en la imagen un src, creo que esto es el equilibrio entre la optimizacion web para la velocidad y el SEO.

## Importante

Siempre tiene que tener ```data-src``` y ```data-srcset``` y la clase en la imagen ```lazy```.


Codigo html:
```
<img class="lazy"
  src="https://demo.cloudimg.io/width/1200/q25.fgaussian5/https://gallery.airstore.io/birds.jpg"
  data-src="https://demo.cloudimg.io/width/1200/q85/https://gallery.airstore.io/birds.jpg"
  data-srcset="https://demo.cloudimg.io/width/1200/q85/https://gallery.airstore.io/birds.jpg" >
```
DEMOS:

Slider con .jpg:

https://torresgol10.github.io/lazyload-image-scroll/index.html
