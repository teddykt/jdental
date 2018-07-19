package com.jdental.service.UserServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jdental.dao.AppointmentDao;
import com.jdental.domain.Appointment;
import com.jdental.domain.User;
import com.jdental.service.AppointmentService;
import com.jdental.service.UserService;

@Service
public class AppointmentServiceImpl implements AppointmentService{

		@Autowired
		private AppointmentDao appointmentDao;
		
		@Autowired
		private UserService userService;
		
		public Appointment createAppointment(Appointment appointment) {
			return appointmentDao.save(appointment);
		}
		
		public List<Appointment> findAll() {
			return appointmentDao.findAll();
		}
		
		public Appointment findAppointment(Long id) {
			return appointmentDao.findOne(id);
		}
		
		public void confirmAppointment(Long id) {
			Appointment appointment = findAppointment(id);
			appointment.setConfirmed(true);;
			appointmentDao.save(appointment);
		}
		
		public List<Appointment> findAppointmentList(String username) {
			User user = userService.findByUsername(username);
			List<Appointment> appointmentList = user.getAppointmentList();
			
			return appointmentList;
		}
}
