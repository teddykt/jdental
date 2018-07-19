package com.jdental.service;

import java.util.List;

import com.jdental.domain.Appointment;

public interface AppointmentService {
	Appointment createAppointment(Appointment appointment);

	
	List<Appointment> findAll();

	
	Appointment findAppointment(Long id);

	
	void confirmAppointment(Long id);
	
	List<Appointment> findAppointmentList(String id);
	

}
