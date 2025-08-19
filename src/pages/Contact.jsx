import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa';

const schema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  phone: yup.string().required('Telefone é obrigatório'),
  subject: yup.string().required('Assunto é obrigatório'),
  message: yup.string().required('Mensagem é obrigatória').min(10, 'Mínimo 10 caracteres'),
});

const CONTACT_EMAIL = 'marcusalcantara@gmail.com';

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  // Enviar por e-mail usando FormSubmit
  const onSubmit = async (data) => {
    setSending(true);
    setSent(false);
    setErrorMsg('');

    try {
      const payload = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
        _subject: 'Novo contato – Site ALCÂNTARA',
        _replyto: data.email,
        _template: 'table',
        _captcha: 'false',
      };

      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        let msg = 'Falha ao enviar. Tente novamente.';
        try {
          const j = await res.json();
          if (j?.message) msg = j.message;
        } catch (_) {}
        throw new Error(msg);
      }

      setSent(true);
      reset();
    } catch (err) {
      setErrorMsg(err.message || 'Não foi possível enviar sua mensagem agora.');
    } finally {
      setSending(false);
    }
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
          {/* Formulário */}
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
                  className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-gray-500 focus:border-gray-500`}
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
                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-gray-500 focus:border-gray-500`}
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
                    className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:ring-gray-500 focus:border-gray-500`}
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
                  className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? 'border-red-500' : 'border-gray-300'} focus:ring-gray-500 focus:border-gray-500`}
                >
                  <option value="">Selecione um assunto</option>
                  <option value="Cursos e Capacitações">Cursos e Capacitações</option>
                  <option value="Consultoria">Consultoria</option>
                  <option value="Parcerias">Parcerias</option>
                  <option value="Outros">Outros</option>
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
                  className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:ring-gray-500 focus:border-gray-500`}
                />
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
              </div>

              {/* Estados de envio */}
              {sent && (
                <p className="text-sm text-green-600">
                  ✅ Mensagem enviada com sucesso! Verifique o e-mail <b>{CONTACT_EMAIL}</b>.
                </p>
              )}
              {errorMsg && (
                <p className="text-sm text-red-600">
                  ❌ {errorMsg}
                </p>
              )}

              <div>
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full bg-gray-700 hover:bg-gray-800 text-white flex items-center justify-center gap-2"
                  disabled={sending}
                >
                  <FaEnvelope className="h-5 w-5" />
                  {sending ? 'Enviando…' : 'Enviar E-mail'}
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Informações de contato */}
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
                <FaMapMarkerAlt className="h-6 w-6 text-gray-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">Endereço</h3>
                  <p className="text-gray-600">
                    Av. Jorge Amado, nº 1565, Sala 04 e 06<br />
                    Bairro Jardins – Aracaju/SE – CEP 49025-330
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <FaPhone className="h-6 w-6 text-gray-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">Telefone</h3>
                  <p className="text-gray-600">
                    <a href="tel:+5579988187788" className="hover:text-gray-800">(79) 98818-7788</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <FaEnvelope className="h-6 w-6 text-gray-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">E-mail</h3>
                  <p className="text-gray-600">
                    <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-gray-800">{CONTACT_EMAIL}</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <FaInstagram className="h-6 w-6 text-gray-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">Instagram</h3>
                  <p className="text-gray-600">
                    <a href="https://instagram.com/marcusalcantara_aju" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">@marcusalcantara_aju</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <FaLinkedin className="h-6 w-6 text-gray-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">LinkedIn</h3>
                  <p className="text-gray-600">
                    <a href="https://www.linkedin.com/in/marcus-alcantara" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">Marcus Alcantara</a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
