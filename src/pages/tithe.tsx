import { Button, Flex, Separator, Stack, Text } from '@chakra-ui/react';
import { LuCircleArrowLeft } from 'react-icons/lu';
import { Link, useNavigate } from 'react-router-dom';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/Form/Input';
import { useHookFormMask } from 'use-mask-input';
import { Blockquote } from '@/components/ui/blockquote';

interface ITitheForm {
    name: string;
    spouseName?: string;
    phone: string;
    birthDate: string;
    address: string;
    neighborhood: string;
    city: string;
    number: string;
    complement?: string;
    children?: string;
}

const titheFormSchema = zod.object({
    name: zod.string().min(1, { message: 'Nome é obrigatório' }),
    spouseName: zod.string().optional(),
    phone: zod.string().length(15, { message: 'Formato de telefone inválido' }),
    birthDate: zod.string().length(10, { message: 'Data de nascimento é obrigatória' }),
    address: zod.string().min(5, { message: 'Endereço é obrigatório' }),
    neighborhood: zod.string().min(2, { message: 'Bairro é obrigatório' }),
    city: zod.string().min(3, { message: 'Cidade é obrigatória' }),
    number: zod.string().min(1, { message: 'Número é obrigatório' }),
    complement: zod.string().optional(),
    children: zod.string().optional(),
});

export function Tithe() {
    const navigate = useNavigate();

    const { register, handleSubmit, formState } = useForm<ITitheForm>({
        resolver: zodResolver(titheFormSchema),
    });

    const { errors } = formState;

    const registerWithMask = useHookFormMask(register);

    const handleSendWhatsAppMessage = (data: ITitheForm) => {
        const message = `
        Olá, gostaria de fazer meu cadastro de dizimista! Seguem os dados:

        *Nome*: ${data.name}
        *Nome do cônjuge*: ${data.spouseName ?? 'Não informado'}
        *Telefone*: ${data.phone}
        *Data de nascimento*: ${data.birthDate}
        *Endereço*: ${data.address}
        *Bairro*: ${data.neighborhood}
        *Cidade*: ${data.city}
        *Número*: ${data.number}
        *Complemento*: ${data.complement ?? 'Sem complemento'}
        *Filhos*: ${data.children ?? 'Não informado'}
        `;

        window.open(`https://wa.me/555130642612?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    };

    return (
        <Flex flexDir={'column'} justify={'center'} align={'center'} gap={8} bg={'#1A2855'} pb={8} px={4}>
            <Stack w="full" maxW={'800px'} gap={12}>
                <Stack mt={8} gap={8}>
                    <Blockquote cite={'2 Coríntios 9:7'} fontSize={'sm'} color={'white'} fontStyle={'italic'}>
                        Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama
                        quem dá com alegria.
                    </Blockquote>
                    <Blockquote cite={'Malaquias 3:10'} fontSize={'sm'} color={'white'} fontStyle={'italic'}>
                        Tragam o dízimo todo ao depósito do templo, para que haja alimento em minha casa. Ponham-me à
                        prova", diz o Senhor dos Exércitos, "e vejam se não vou abrir as comportas dos céus e derra­mar
                        sobre vocês tantas bênçãos que nem terão onde guardá-las.
                    </Blockquote>
                </Stack>
                <Stack color={'white'} gap={4}>
                    <Text>
                        No mês de novembro a Igreja no Brasil estimula os seus féis a uma especial reflexão sobre o
                        dízimo. A palavra dízimo quer dizer a décima parte de alguma coisa, ou dez por cento. Na Bíblia
                        o dízimo é a décima parte dos bens que cada família produzia e que era ofertada a Deus em sinal
                        de gratidão. Cada família entregava aos sacerdotes dez por cento dos produtos da terra para a
                        manutenção do templo e dos serviços religiosos (cf. Ne 10,38-39; Tb 1,8; Ml 3,10).
                    </Text>
                    <Text>
                        Há umas questões básicas que pressupõe o dízimo: fé, gratidão, generosidade, senso de
                        corresponsabilidade, consciência da dimensão econômica da evangelização… Por isso a CNBB assim
                        define o dízimo: “O dízimo é uma contribuição sistemática e periódica dos fiéis, por meio da
                        qual cada comunidade assume, corresponsavelmente, sua sustentação e a da Igreja. Ele pressupõe
                        pessoas evangelizadas e comprometidas com a evangelização” (CNBB, Doc. 106, N.6).
                    </Text>
                    <Text fontWeight={'bold'} fontSize={'lg'}>
                        Uma resposta de gratidão e sinal de corresponsabilidade
                    </Text>
                    <Text>
                        Sim, o dízimo para a Igreja é um gesto de gratidão a Deus por tantos benefícios recebidos. A
                        devolução do dízimo nasce do coração sensível. O dízimo é um ato de amor a Deus e aos irmãos. É
                        uma resposta de fé e de corresponsabilidade pela evangelização, pois a esta tem uma dimensão
                        econômica.
                    </Text>
                    <Text>
                        Muitos se questionam sobre a quantia dos 10%. Quanto a isso é importante se perguntar sobre
                        medida da própria gratidão. A gratidão não tem medida! Cada um é chamado, antes de tudo, a
                        avaliar-se! Deus não gosta de nada forçado e nem de medidas mesquinhas!
                    </Text>
                    <Text>
                        Biblicamente eram dez por cento o que os fiéis judeus davam para a manutenção das despesas do
                        templo e manutenção dos sacerdotes. Mas o Dízimo é uma questão de generosidade: “dê cada um
                        conforme o impulso do seu coração, sem tristeza nem constrangimento. Deus ama quem dá com
                        alegria”. Não se trata de uma questão matemática, mas moral, espiritual! É desse modo que Paulo
                        reflete com a comunidade de Corinto (cf. 2Cor 9,7). O importante é que o dizimista se sinta
                        livre e corresponsável dando fielmente a sua contribuição mensal. “Quem é generoso progride na
                        vida” (Prv. 11,25).
                    </Text>
                    <Text fontWeight={'bold'} fontSize={'lg'}>
                        Quem deve ser dizimista?
                    </Text>
                    <Text>
                        Todas as pessoas que participam da vida da Igreja e tem uma fonte de renda são convidadas a
                        serem dizimistas. Ninguém, nessa condição, está dispensado de manifestar sua gratidão a Deus
                        para a promoção da fé.
                    </Text>
                    <Text>
                        A obrigação do dízimo vem da generosidade do próprio coração. Se o fiel católico se sente parte
                        integrante da Igreja, então não está dispensado de contribuir para que ela seja sempre viva,
                        forte, atuante e tenha todos os meios necessários para que a Palavra de Deus chegue aos mais
                        afastados. O dízimo e manifestação da consciência da partilha!
                    </Text>
                    <Text fontWeight={'bold'} fontSize={'lg'}>
                        Onde é aplicado esse recurso do dízimo?
                    </Text>
                    <Text>
                        Os recursos financeiros provenientes das paróquias não pertence ao pároco e nem mesmo em nenhuma
                        forma de percentual. Isso não existe para a Igreja Católica. O pároco não tem um percentual
                        sobre o dízimo arrecadado. Isso é importante saber! Então reflitamos para onde vai o seu dízimo.
                    </Text>
                    <Text>
                        O dizimo deve ser entregue mensalmente porque as despesas ordinárias da manutenção da Igreja são
                        pagas todos os meses. O recurso do dízimo é aplicado nas seguintes despesas: no pagamento de
                        funcionários, encargos sociais, assinaturas de subsídios e revistas, energia elétrica, água,
                        telefone, internet, material de limpeza, manutenção das estruturas físicas e técnicas, despesas
                        pastorais (eventos), formação, manutenção dos sacerdotes, material litúrgico (toalhas, velas,
                        flores, papel, vinho, hóstias…), transportes, partilha com a (Arqui)diocese, ações missionárias,
                        Caridade, etc. Visto que todos os meses temos contas a pagar, então todo mês cada fiel é chamado
                        a colaborar para que tudo seja pago. A Igreja é nossa!
                    </Text>
                    <Text>
                        A partir dessas diversas despesas podemos perceber que o dízimo tem muitas dimensões:
                        administrativa, religiosa, eclesial, ética, missionária, caritativa. Lamentavelmente muitas
                        paróquias, por causa da frágil corresponsabilidade dos fieis, tem muita dificuldade para avançar
                        na evangelização por falta de recursos. Isso é muito grave!
                    </Text>
                    <Text fontWeight={'bold'} fontSize={'lg'}>
                        A necessidade da transparência e fidelidade
                    </Text>
                    <Text>
                        No início de cada mês a liderança da pastoral do dízimo, em nome do Pároco, deve prestar contas
                        à comunidade dos valores recebidos e onde foram aplicados. Onde não há transparência há dúvidas
                        administrativas. A prestação de contas é um direito dos fieis e uma forma de fidelização. É
                        muito bom quando sabemos e vemos onde está sendo empregado o dízimo devolvido com espírito de
                        fé.
                    </Text>
                    <Text>
                        A coordenação da pastoral do dízimo, juntamente com o COPAE e o CPP devem continuamente serem
                        informados sobre a situação econômica da paróquia, pois dela dependem os novos investimentos
                        pastorais.
                    </Text>
                    <Text>
                        O dízimo, devolvido com amor, faz-nos mais generosos e isso agrada a Deus. Faz-nos mais
                        desapegados dos bens terrenos; faz-nos menos egoístas. Isso é sinal de amor. Nesse sentido, o
                        dízimo quando manifesta a bondade do coração do fiel, contribui diretamente para nossa salvação.
                    </Text>
                    <Text>
                        Lembremo-nos do que Jesus cristo declarou: “Quem der ainda que seja apenas um copo de água fria
                        a um desses pequeninos, por ser meu discípulo, eu garanto a vocês: não perderá a sua recompensa»
                        (Mt 10,42). O dizimista, portanto, é um fiel que assume um compromisso de vida cristã baseado na
                        generosidade.
                    </Text>
                    <Text fontWeight={'bold'} fontSize={'lg'}>
                        O dízimo e bênçãos de Deus
                    </Text>
                    <Text>
                        Na Bíblia Sagrada encontramos referências sobre a relação entre dízimo e bênçãos. Deus usa de
                        muitas formas para derramar sobre nós suas bênçãos e a seu tempo vai recompensar todos aqueles
                        que fizeram o bem e foram generosos neste mundo.
                    </Text>
                    <Text>
                        Por meio do profeta Malaquias, Deus diz: “Tragam o dízimo. Façam essa experiência comigo. Vocês
                        vão ver se não abro as portas do céu, se não derramo sobre vocês as minhas bênçãos de fartura”
                        (Ml 3,10). “A ti, Senhor, pertence o amor, porque tu pagas a cada um conforme as suas obras» (Sl
                        62,13; Prov. 24,12). “O Senhor retribui a oferta e Ele, em troca, lhe dará sete vezes mais”
                        (Eclo 35,7-10).
                    </Text>
                    <Text>
                        Com o dízimo dos fieis a Igreja se fortalece e as possibilidades de fazer o bem e divulgar a
                        Palavra de Deus aumentam. Por isso a sua participação é muito importante! Manifeste que você é
                        uma pedra viva da Igreja e por ela se sente corresponsável.
                    </Text>
                    <Text>
                        Certo, é que a Igreja é obra de Deus, e o seu Senhor vai retribuir a todos aqueles que foram
                        generosos para com ela: “Eis que venho em breve, e comigo trago o salário para retribuir a cada
                        um conforme o seu trabalho” (Ap 22,12). PARA REFLEXÃO PESSOAL: Você já é dizimista? Você se
                        sente corresponsável pelo crescimento da Igreja? Quais são as várias dimensões do dízimo?
                    </Text>
                    <Stack>
                        <Text>Fonte:</Text>
                        <Text fontSize={'sm'}>
                            {' '}
                            <Link
                                to="https://www.cnbb.org.br/a-importancia-do-dizimo/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://www.cnbb.org.br/a-importancia-do-dizimo/
                            </Link>
                        </Text>
                    </Stack>
                </Stack>
                <Separator borderColor={'blue.800'} />
                <Stack w="full" textAlign={'center'} color={'white'} gap={4} fontWeight={500}>
                    <Text fontSize={'xl'}>Gostaria de realizar seu cadastro de dizimista?</Text>
                    <Text fontWeight={500}>
                        Preencha os campos abaixo e clique em enviar, isso irá te redirecionar para uma conversa no
                        WhatsApp da Paróquia, já com todas as informações iniciais preenchidas, basta apenas enviar a
                        mensagem.
                    </Text>
                    <Text>
                        Após o envio da mensagem no WhatsApp, você será atendido(a) para dar continuidade ao seu
                        cadastro de dizimista.
                    </Text>
                </Stack>
                <Stack
                    w="full"
                    bg={'gray.100'}
                    rounded={'lg'}
                    py={8}
                    px={6}
                    as={'form'}
                    onSubmit={handleSubmit(handleSendWhatsAppMessage)}
                    gap={8}
                    color={'black'}
                >
                    <Input
                        {...register('name')}
                        placeholder="Nome"
                        errorText={errors.name?.message}
                        required
                        isCard={false}
                    />
                    <Input
                        {...register('spouseName')}
                        placeholder="Nome do cônjuge (opcional)"
                        errorText={errors.spouseName?.message}
                        isCard={false}
                    />
                    <Input
                        {...register('children')}
                        placeholder="Nome dos filhos (opcional)"
                        errorText={errors.children?.message}
                        isCard={false}
                    />
                    <Input
                        {...registerWithMask('phone', ['(99) 99999-9999'])}
                        placeholder="Telefone"
                        errorText={errors.phone?.message}
                        required
                        isCard={false}
                    />
                    <Input
                        type="text"
                        {...registerWithMask('birthDate', '99/99/9999')}
                        placeholder="Data de nascimento"
                        errorText={errors.birthDate?.message}
                        required
                        isCard={false}
                    />
                    <Input
                        {...register('address')}
                        placeholder="Endereço"
                        errorText={errors.address?.message}
                        required
                        isCard={false}
                    />
                    <Input
                        {...register('neighborhood')}
                        placeholder="Bairro"
                        errorText={errors.neighborhood?.message}
                        isCard={false}
                        required
                    />
                    <Input
                        {...register('city')}
                        placeholder="Cidade"
                        errorText={errors.city?.message}
                        required
                        isCard={false}
                    />
                    <Input
                        type="number"
                        {...register('number')}
                        placeholder="Número"
                        errorText={errors.number?.message}
                        required
                        isCard={false}
                    />
                    <Input
                        {...register('complement')}
                        placeholder="Complemento (opcional)"
                        errorText={errors.complement?.message}
                        isCard={false}
                    />
                    <Button type="submit" colorPalette={'blue'}>
                        Enviar
                    </Button>
                </Stack>
            </Stack>
            <Button
                mt={4}
                rounded={'full'}
                fontSize={'sm'}
                bg={'#0D3D71'}
                _hover={{ bg: '#1B4D85' }}
                color={'white'}
                w="fit-content"
                fontWeight={700}
                onClick={() => navigate('/')}
            >
                <LuCircleArrowLeft />
                Voltar à página inicial
            </Button>
        </Flex>
    );
}
