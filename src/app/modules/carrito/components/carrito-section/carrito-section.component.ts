import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/shared/services/carrito/carrito.service';

@Component({
  selector: 'app-carrito-section',
  templateUrl: './carrito-section.component.html',
  styleUrls: ['./carrito-section.component.css']
})
export class CarritoSectionComponent implements OnInit {

  constructor(private cartService: CarritoService) { }

  carData = this.cartService.cartData

  devVal(){
    return this.carData
  }

  ngOnInit(): void {
  }

  //botones de sumar o restar
  cantidad = 1
  contador = 1
  suma(){
    
    this.contador += 1
    this.cantidad = this.contador
  }
  resta(){
    if(this.cantidad >1){
      this.contador -= 1
      this.cantidad = this.contador
    }
    
  }
  
  comprar(){
    const carSection = document.getElementById("carSection");
    const paySection = document.getElementById("paySection");
    const datosPago = document.getElementById("datosPago");
    datosPago!.style.fontWeight = "800";
    carSection!.style.display = "none";
    paySection!.style.display = "block"
    
  }


  finCompra(){
    const paySection = document.getElementById("paySection");
    const finalSection = document.getElementById("finalComp");
    const confirmacion = document.getElementById("confirmacion");
    confirmacion!.style.fontWeight = "800";
    paySection!.style.display = "none"
    finalSection!.style.display = "block"
  }


  //precioSiguienteInterface
  precioNextIn(){
    return this.cartService.sumaPrecios()
  }
  sumaTotal(){
    return this.cartService.sumTotal()
  }
}
