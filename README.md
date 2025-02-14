# Portfolio Website

Um site portfolio moderno e interativo construído com Next.js 14, React e TypeScript, apresentando animações suaves e uma experiência de usuário rica.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com Server Components
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **EmailJS** - Serviço de envio de emails
- **React Icons** - Ícones

## 📱 Páginas

### Home (/)
- Hero section com efeito parallax
- Formulário de contato com:
  - Validação em tempo real
  - Rate limiting (3 envios/minuto)
  - Feedback visual e sonoro
  - Integração com EmailJS

### Sobre (/about)
- Biografia profissional
- Gráfico de habilidades interativo com:
  - Animações de progresso
  - Tooltips informativos
  - Ícones animados
- Timeline profissional com:
  - Cards alternados
  - Animações de scroll
  - Badges de tecnologias

### Portfolio (/portfolio)
- Grid de projetos com:
  - Cards interativos
  - Imagens com hover effect
  - Tags de tecnologias
  - Links para demo e GitHub

## 🎨 Features

### Design System
- Tema claro/escuro
- Cores customizáveis via CSS Variables
- Design responsivo
- Gradientes e efeitos de vidro

### Animações
- Transições entre páginas
- Efeitos de scroll
- Micro-interações
- Feedback visual

### Acessibilidade
- Semântica HTML
- ARIA labels
- Skip links
- Suporte a teclado

### Mobile
- Gestos touch
- Interface adaptativa
- Performance otimizada

## 🛠 Componentes Principais

### Layout
```typescript
src/components/Layout.tsx
- Estrutura base do site
- Gerenciamento de tema
- Barra de progresso
```

### Sidebar
```typescript
src/components/Sidebar.tsx
- Menu de navegação
- Gestos touch para mobile
- Animações de transição
```

### Timeline
```typescript
src/components/Timeline.tsx
- Experiência profissional
- Cards animados
- Badges de skills
```

### ContactForm
```typescript
src/components/ContactForm.tsx
- Formulário de contato
- Validação e feedback
- Rate limiting
- Integração EmailJS
```

## 🚀 Como Usar

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/portfolio
```

2. Instale as dependências
```bash
npm install
```

3. Configure as variáveis de ambiente
```env
EMAILJS_SERVICE_ID=seu_service_id
EMAILJS_TEMPLATE_ID=seu_template_id
EMAILJS_PUBLIC_KEY=sua_public_key
```

4. Rode o projeto
```bash
npm run dev
```

## 📝 Configurações Adicionais

### EmailJS
- Criar conta em emailjs.com
- Configurar template de email
- Adicionar serviço de email
- Copiar credenciais

### Customização
- Editar cores em `globals.css`
- Atualizar informações em `data/`
- Personalizar animações em componentes

## 🤝 Contribuindo

1. Fork o projeto
2. Crie sua feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes. 