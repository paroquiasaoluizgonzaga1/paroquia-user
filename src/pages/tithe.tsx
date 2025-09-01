import { Button, Flex, Stack, Text } from '@chakra-ui/react';
import { LuCircleArrowLeft } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
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
                <Stack mt={8}>
                    <Blockquote cite={'2 Coríntios 9:7'} fontSize={'sm'} color={'white'} fontStyle={'italic'}>
                        Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama
                        quem dá com alegria.
                    </Blockquote>
                </Stack>
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
