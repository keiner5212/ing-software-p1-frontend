import { Component } from '@angular/core';

@Component({
  selector: 'app-computer-reservation',
  templateUrl: './computer-rentals.component.html',
  styleUrls: ['./computer-rentals.component.css']
})
export class ComputerReservationComponent {
  computers = [
    { id: 1, name: 'PC 1', description: 'Computador de escritorio', selectedSchedule: '' },
    { id: 2, name: 'PC 2', description: 'Computador portátil', selectedSchedule: '' }
    // Agrega más computadoras según sea necesario
  ];

  schedules = ['9:00 AM - 11:00 AM', '11:00 AM - 1:00 PM', '1:00 PM - 3:00 PM', '3:00 PM - 5:00 PM'];
  reservationMessage: string | null = null;

  // Este método se llama cuando cambia la selección del horario
  onScheduleChange(event: Event, computer: any) {
    const selectElement = event.target as HTMLSelectElement;
    computer.selectedSchedule = selectElement.value;
  }

  // Este método se llama cuando se hace clic en el botón de reservar
  reserveComputer(computer: any) {
    if (computer.selectedSchedule) {
      this.reservationMessage = `Portátil reservado: ${computer.name} en el horario ${computer.selectedSchedule}`;
    } else {
      this.reservationMessage = `Por favor, seleccione un horario para ${computer.name}.`;
    }

    // Limpiar el mensaje después de unos segundos (opcional)
    setTimeout(() => {
      this.reservationMessage = null;
    }, 3000);
  }
}