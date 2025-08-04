import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const schema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  phone: yup.string().required('Telefone é obrigatório'),
  subject: yup.string().required('Assunto é obrigatório'),
  message: yup.string().required('Mensagem é obrigatória').min(10, 'Mínimo 10 caracteres'),
});

const Contact = () => {
  // Efeito para rolar para o topo quando a página é carregada
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
    // Implementar envio do formulário
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Entre em Contato</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Solicite uma proposta ou tire suas dúvidas sobre nossos serviços
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name')}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-primary-500 focus:border-primary-500`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-primary-500 focus:border-primary-500`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:ring-primary-500 focus:border-primary-500`}
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Assunto
                </label>
                <select
                  id="subject"
                  {...register('subject')}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? 'border-red-500' : 'border-gray-300'} focus:ring-primary-500 focus:border-primary-500`}
                >
                  <option value="">Selecione um assunto</option>
                  <option value="courses">Cursos e Capacitações</option>
                  <option value="consulting">Consultoria</option>
                  <option value="partnership">Parcerias</option>
                  <option value="other">Outros</option>
                </select>
                {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message')}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:ring-primary-500 focus:border-primary-500`}
                />
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
              </div>

              <div>
                <Button type="submit" variant="primary" className="w-full">
                  Enviar Mensagem
                </Button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Informações de Contato</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <FaMapMarkerAlt className="h-6 w-6 text-primary-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">Endereço</h3>
                  <p className="text-gray-600">Av. Ministro Geraldo Barreto Sobral, 2150<br />Jardins, Aracaju/SE</p>
                </div>
              </div>

              <div className="flex items-start">
                <FaPhone className="h-6 w-6 text-primary-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">Telefone</h3>
                  <p className="text-gray-600">
                    <a href="tel:+5579988187788" className="hover:text-primary-600">(79) 98818-7788</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <FaEnvelope className="h-6 w-6 text-primary-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">E-mail</h3>
                  <p className="text-gray-600">
                    <a href="mailto:marcusalcantara@gmail.com" className="hover:text-primary-600">marcus@alcantara.com</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-bold text-gray-900 mb-4">Horário de Atendimento</h3>
              <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
            </div>

            <div className="mt-8">
              <Button variant="secondary" className="w-full" asChild>
                <a href="https://wa.me/5579988187788">
                  <FaWhatsapp className="h-5 w-5 mr-2" />
                  Conversar no WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;