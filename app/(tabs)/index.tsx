import React from 'react';
import {
  Button,
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// --- DADOS DO CURRÍCULO ---
// Seus dados estão aqui e você pode editá-los
const userData = {
  nome: "Lívia Ariane Frazão da Silva",
  fotoUrl: "https://media.licdn.com/dms/image/v2/D4D03AQHH3Eg6773iYQ/profile-displayphoto-shrink_800_800/B4DZQ9vwwbHMAc-/0/1736202719376?e=1749081600&v=beta&t=jzK_h1ichtyFIZO71BTu1ks4oAHFKcB-0QAXmIx-fM8",
  resumo: "Estudante de Análise e Desenvolvimento de Sistemas da Faculdade Senac, tenho interesse em atuar na área de desenvolvimento de software.",
  contato: {
    telefone: "(81)99353-4349",
    email: "liviasvfm@gmail.com",
    endereco: "Rua Ernesto Nazareth, 306 - Areias, Recife - PE, 50860-260",
    enderecoLink: "https://www.google.com/maps/search/?api=1&query=Rua+Ernesto+Nazareth,+306,+Recife",
    linkedinUrl: "https://www.linkedin.com/in/liviafrazaoo/",
    githubUrl: "https://github.com/liviasvfm",
  },
  formacao: [
    { curso: "Análise e Desenvolvimento de Sistemas", instituicao: "SENAC em Parceria com o Porto Digital" },
    { curso: "Língua Inglesa", instituicao: "ABA Education" },
  ],
  experiencia: [
    { cargo: "Consultora de Beleza", empresa: "Raia Drogasil", periodo: "2020-2023" },
  ],
  habilidades: [
    "Pensamento Crítico",
    "Gestão de Tempo",
    "Habilidades de Comunicação",
    "Adaptabilidade e Aprendizado Rápido",
  ],
};

// Função auxiliar para abrir links
const openLink = (url) => {
  Linking.openURL(url).catch((err) => console.error('Não foi possível abrir o link', err));
};

const SectionDivider = () => <View style={styles.sectionDivider} />;

// Componente para o ícone de rede social
const SocialIcon = ({ url, iconUrl, altText }) => (
  <TouchableOpacity onPress={() => openLink(url)} style={styles.socialButton}>
    <Image 
      source={{ uri: iconUrl }} 
      style={styles.socialIcon} 
      accessibilityLabel={altText}
    />
  </TouchableOpacity>
);

function App() {
  const [formName, setFormName] = React.useState('');
  const [formEmail, setFormEmail] = React.useState('');

  // No React Native, não usamos "alert()". Usamos console.log() ou uma biblioteca de modais
  const handleSubmit = () => {
    console.log(`Tentativa de Envio (Simulação):\nNome: ${formName}\nEmail: ${formEmail}`);
    // Em um app real, você enviaria esses dados para um servidor aqui
  };

  return (
    <ScrollView style={styles.container}>
      
      {/* -------------------- CABEÇALHO -------------------- */}
      <View style={styles.header}>
        <Text style={styles.name}>{userData.nome}</Text>
        <Image 
          source={{ uri: userData.fotoUrl }} 
          style={styles.profileImage}
          // Fallback para caso a imagem não carregue
          onError={() => console.log('Erro ao carregar imagem de perfil')} 
        />
      </View>

      {/* -------------------- SOBRE MIM E CONTATO -------------------- */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sobre Mim</Text>
        <Text style={styles.bodyText}>{userData.resumo}</Text>

        <View style={styles.contactInfo}>
          <Text style={styles.contactLabel}>📞 Telefone:</Text>
          <Text style={styles.contactText}>{userData.contato.telefone}</Text>

          <Text style={styles.contactLabel}>📧 Email:</Text>
          <Text style={styles.contactText}>{userData.contato.email}</Text>

          <Text style={styles.contactLabel}>🗺️ Endereço:</Text>
          <TouchableOpacity onPress={() => openLink(userData.contato.enderecoLink)}>
            <Text style={[styles.contactText, styles.linkText]}>
              {userData.contato.endereco} (Toque para abrir no mapa)
            </Text>
          </TouchableOpacity>
        </View>

        {/* Links Sociais */}
        <View style={styles.socialContainer}>
          <SocialIcon 
            url={userData.contato.linkedinUrl}
            iconUrl="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            altText="LinkedIn"
          />
          <SocialIcon 
            url={userData.contato.githubUrl}
            iconUrl="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            altText="GitHub"
          />
        </View>
      </View>

      <SectionDivider />

      {/* -------------------- FORMAÇÃO ACADÊMICA -------------------- */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Formação Acadêmica</Text>
        {userData.formacao.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <View>
              <Text style={styles.courseTitle}>{item.curso}</Text>
              <Text style={styles.institution}>{item.instituicao}</Text>
            </View>
          </View>
        ))}
      </View>

      <SectionDivider />

      {/* -------------------- EXPERIÊNCIA PROFISSIONAL -------------------- */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experiência Profissional</Text>
        {userData.experiencia.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <View>
              <Text style={styles.experienceTitle}>{item.cargo}</Text>
              <Text style={styles.experienceDetails}>{item.empresa}</Text>
              <Text style={styles.experienceDetails}>Período: {item.periodo}</Text>
            </View>
          </View>
        ))}
      </View>

      <SectionDivider />

      {/* -------------------- HABILIDADES -------------------- */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Habilidades</Text>
        <View style={styles.skillsContainer}>
          {userData.habilidades.map((skill, index) => (
            <View key={index} style={styles.skillTag}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>

      <SectionDivider />

      {/* -------------------- FORMULÁRIO DE CONTATO (SIMPLIFICADO) -------------------- */}
      <View style={[styles.section, { marginBottom: 20 }]}>
        <Text style={styles.sectionTitle}>Formulário de Contato</Text>
        
        <Text style={styles.formLabel}>Nome:</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Seu Nome" 
          onChangeText={setFormName} 
          value={formName}
        />

        <Text style={styles.formLabel}>Email:</Text>
        <TextInput 
          style={styles.input} 
          placeholder="seu@email.com" 
          onChangeText={setFormEmail} 
          value={formEmail}
          keyboardType="email-address"
        />

        <Text style={styles.formLabel}>Mensagem (Exemplo de Área de Texto):</Text>
        <TextInput 
          style={[styles.input, styles.textArea]} 
          multiline
          numberOfLines={4}
          placeholder="Sua mensagem..."
        />
        
        {/* Usando o componente Button nativo para Simulação de Envio */}
        <View style={{ marginTop: 20 }}>
          <Button 
            title="Enviar Contato" 
            onPress={handleSubmit} 
            color={Platform.OS === 'ios' ? '#1f2937' : '#3b82f6'} 
          />
        </View>
      </View>

      {/* -------------------- FOOTER -------------------- */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          &copy; 2025 Lívia Ariane Frazão da Silva. Todos os direitos reservados.
        </Text>
      </View>
    </ScrollView>
  );
}

export default App; 


// -------------------- ESTILOS REACT NATIVE --------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    // Adicionando um padding superior para o StatusBar no Android/iOS
    paddingTop: Platform.OS === 'android' ? 30 : 0, 
  },
  header: {
    alignItems: 'center',
    paddingBottom: 20,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 10,
  },
  name: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#3b82f6',
  },
  section: {
    padding: 20,
    backgroundColor: '#ffffff',
    marginHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#3b82f6',
    paddingBottom: 5,
  },
  bodyText: {
    fontSize: 16,
    color: '#4b5563',
    lineHeight: 24,
    marginBottom: 10,
  },
  contactInfo: {
    marginTop: 10,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  contactLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1f2937',
    marginTop: 5,
  },
  contactText: {
    fontSize: 16,
    color: '#4b5563',
    marginBottom: 5,
  },
  linkText: {
    color: '#3b82f6',
    textDecorationLine: 'underline',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  socialButton: {
    marginHorizontal: 10,
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
  sectionDivider: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
    paddingLeft: 10,
  },
  bullet: {
    fontSize: 16,
    marginRight: 8,
    color: '#3b82f6',
    fontWeight: 'bold',
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
  institution: {
    fontSize: 14,
    color: '#6b7280',
    fontStyle: 'italic',
  },
  experienceTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1f2937',
  },
  experienceDetails: {
    fontSize: 14,
    color: '#6b7280',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  skillTag: {
    backgroundColor: '#e0f2fe',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 8,
    marginBottom: 8,
  },
  skillText: {
    color: '#0369a1',
    fontWeight: '500',
    fontSize: 14,
  },
  formLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top', // Necessário para Android
  },
  footer: {
    padding: 20,
    backgroundColor: '#1f2937',
    alignItems: 'center',
    marginTop: 10,
  },
  footerText: {
    color: '#9ca3af',
    fontSize: 12,
  },
});