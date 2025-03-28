



export interface ICreateAppointments {
    serviceId: string;
    doctorId: string;
    bookingDate: string;
    bookingHour: string;
}

export type IAppointmentSave = {
    id: string;
    service: string;
    doctor: string;
    specialty: string;
    username: string;
    price: number;
    booking_date: string;
    booking_hour: string;
}
