import { Bell, Shield, Users, Database } from 'lucide-react';

const Settings = () => {
  const settingsSections = [
    {
      title: 'Notificaciones',
      icon: Bell,
      description: 'Configurar alertas y notificaciones del sistema',
      items: ['Alertas de stock bajo', 'Vencimientos de documentación', 'Mantenimientos programados']
    },
    {
      title: 'Seguridad',
      icon: Shield,
      description: 'Gestionar la seguridad y accesos al sistema',
      items: ['Cambiar contraseña', 'Autenticación de dos factores', 'Registro de actividad']
    },
    {
      title: 'Usuarios y Permisos',
      icon: Users,
      description: 'Administrar usuarios y sus niveles de acceso',
      items: ['Gestionar roles', 'Asignar permisos', 'Crear usuarios']
    },
    {
      title: 'Respaldo de Datos',
      icon: Database,
      description: 'Configurar copias de seguridad del sistema',
      items: ['Programar backups', 'Restaurar datos', 'Historial de respaldos']
    }
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Configuración</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {settingsSections.map((section, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <section.icon className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
            </div>
            <p className="text-gray-600 mb-4">{section.description}</p>
            <ul className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center">
                  <button className="text-blue-600 hover:text-blue-800 text-sm">{item}</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;