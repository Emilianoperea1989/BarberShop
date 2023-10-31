
import React, { useState } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from "axios";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendarComponent.css';


const CalendarComponent = () => {

    const [preferenceId, setPreferenceId] = useState(null);

    initMercadoPago("TEST-c0a27d9f-313f-40d3-8e25-fe481708656b");
  
    const createPreference = async () => {
      try {
        const response = await axios.post("http://localhost:8080/create_preference", {
          description: "Bananita contenta",
          price: 100,
          quantity: 1,
        });
  
        const { id } = response.data;
        return id;
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleBuy = async () => {
      const id = await createPreference();
      if (id) {
        setPreferenceId(id);
      }
    };
    // Definimos dos estados usando el hook 'useState' de React
    const [selectedDate, setSelectedDate] = useState(new Date()); // Estado para la fecha seleccionada
    const [selectedTime, setSelectedTime] = useState('09:00'); // Estado para la hora seleccionada

    // Función que se ejecuta cuando cambia la fecha seleccionada en el calendario
    const handleDateChange = (date) => {
        // Verificamos si la fecha seleccionada es igual o posterior a la fecha actual
        if (date >= new Date()) {
            setSelectedDate(date); // Actualizamos el estado de la fecha seleccionada
        }
    };

    // Función para manejar el cambio de la hora seleccionada
    const handleTimeChange = (time) => {
        setSelectedTime(time); // Actualizamos el estado de la hora seleccionada
    };

    // Función que genera las opciones de tiempo (de 09:00 a 18:00)
    const generateTimeOptions = () => {
        const options = [];
        for (let hour = 9; hour <= 18; hour++) {
            options.push(`${hour.toString().padStart(2, '0')}:00`);
        }
        return options; 
    };

    // Función para manejar la acción de reservar
    const handleReservation = () => {
        // Aquí puedes agregar la lógica para procesar la reserva
        // Por ejemplo, puedes enviar los datos seleccionados a un servidor o hacer lo que necesites.
        console.log('Reservado:', selectedDate.toLocaleDateString(), selectedTime);
    };

    return (
        <div className="turno-container">
            <h2>Select a Date and Time</h2>
            <div className="calendar-container">
                <Calendar
                    onChange={handleDateChange}
                    value={selectedDate}
                    minDate={new Date()}
                    locale='en-US'
                />
            </div>
            <p>To schedule an appointment, you must pay 50% of your order.</p>
            <div className="time-selection">
                <h3>Select a Time</h3>
                <select
                    value={selectedTime}
                    onChange={(e) => handleTimeChange(e.target.value)}
                >
                    {generateTimeOptions().map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
            <div className="selected-info">
                <h3>Selected Date: {selectedDate.toLocaleDateString()}</h3>
                <h3>Selected Time: {selectedTime}</h3>
            </div>
            <button className='btn-reserva' onClick={handleBuy}>Reserve</button>
             {preferenceId && <Wallet initialization={{ preferenceId }} />}
        </div>
    );
};

// Exportamos el componente CalendarComponent para que pueda ser utilizado en otros archivos
export default CalendarComponent;