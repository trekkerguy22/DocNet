import React from 'react';
import { FileText, Calendar, Pill as Pills, Activity, Clock, AlertCircle, Download, Upload, Share2 } from 'lucide-react';
import type { Patient, Appointment, Medication } from '../../types';

interface PatientPortalProps {
  patient: Patient;
}

export function PatientPortal({ patient }: PatientPortalProps) {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Patient Overview */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">{patient.name}</h1>
            <div className="flex gap-4 text-sm text-gray-600">
              <span>DOB: {new Date(patient.dateOfBirth).toLocaleDateString()}</span>
              <span>•</span>
              <span>Gender: {patient.gender}</span>
              <span>•</span>
              <span>ID: {patient.id}</span>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg">
              <Download className="w-4 h-4" />
              Export Records
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg">
              <Share2 className="w-4 h-4" />
              Share Access
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Medical History */}
        <div className="col-span-2 space-y-6">
          {/* Upcoming Appointments */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Upcoming Appointments</h2>
            <div className="space-y-4">
              {patient.appointments
                .filter(apt => apt.status === 'scheduled')
                .map((appointment: Appointment) => (
                  <div key={appointment.id} className="flex items-start gap-4 p-4 border rounded-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{appointment.type}</h3>
                        <span className="text-sm text-gray-500">
                          {new Date(appointment.date).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {appointment.time} with Dr. {appointment.doctorId}
                      </p>
                      {appointment.notes && (
                        <p className="text-sm text-gray-500 mt-2">{appointment.notes}</p>
                      )}
                    </div>
                  </div>
                ))}
            </div>
            <button className="w-full mt-4 text-center text-blue-600 hover:underline">
              View All Appointments
            </button>
          </div>

          {/* Current Medications */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Current Medications</h2>
            <div className="space-y-4">
              {patient.medications.map((medication: Medication) => (
                <div key={medication.id} className="flex items-start gap-4 p-4 border rounded-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Pills className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{medication.name}</h3>
                      <span className="text-sm text-gray-500">
                        Prescribed by Dr. {medication.prescribedBy}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {medication.dosage} • {medication.frequency}
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        Started: {new Date(medication.startDate).toLocaleDateString()}
                      </span>
                      {medication.endDate && (
                        <span className="flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          Ends: {new Date(medication.endDate).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Health Metrics */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Health Metrics</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Blood Pressure</span>
                  <Activity className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-2xl font-bold">120/80</div>
                <span className="text-sm text-gray-500">Last updated: 2 days ago</span>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Heart Rate</span>
                  <Activity className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-2xl font-bold">72 bpm</div>
                <span className="text-sm text-gray-500">Last updated: 2 days ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-2 p-3 text-left hover:bg-gray-50 rounded-lg">
                <Calendar className="w-5 h-5 text-blue-600" />
                Schedule Appointment
              </button>
              <button className="w-full flex items-center gap-2 p-3 text-left hover:bg-gray-50 rounded-lg">
                <Pills className="w-5 h-5 text-blue-600" />
                Refill Prescription
              </button>
              <button className="w-full flex items-center gap-2 p-3 text-left hover:bg-gray-50 rounded-lg">
                <FileText className="w-5 h-5 text-blue-600" />
                View Test Results
              </button>
              <button className="w-full flex items-center gap-2 p-3 text-left hover:bg-gray-50 rounded-lg">
                <Upload className="w-5 h-5 text-blue-600" />
                Upload Documents
              </button>
            </div>
          </div>

          {/* Recent Documents */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Recent Documents</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <FileText className="w-5 h-5 text-gray-500" />
                <div className="flex-1">
                  <h3 className="text-sm font-medium">Blood Test Results</h3>
                  <p className="text-xs text-gray-500">Added 2 days ago</p>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Download className="w-4 h-4 text-gray-500" />
                </button>
              </div>
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <FileText className="w-5 h-5 text-gray-500" />
                <div className="flex-1">
                  <h3 className="text-sm font-medium">Vaccination Record</h3>
                  <p className="text-xs text-gray-500">Added 1 week ago</p>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Download className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}