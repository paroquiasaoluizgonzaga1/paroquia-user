import { Button, Flex, Separator, Text } from '@chakra-ui/react';
import { LuCircleArrowLeft } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { QrCode } from '@/components/ui/qr-code';
import { FaRegCopy } from 'react-icons/fa6';
import { toaster } from '@/components/ui/toaster';

const pixCode = `00020101021126360014br.gov.bcb.pix0114908316600049515204000053039865802BR5925Mitra Da Diocese De Novo 6008BRASILIA62070503***63045D06`;

export function Pix() {
    const navigate = useNavigate();

    const handleCopy = () => {
        navigator.clipboard
            .writeText(pixCode)
            .then(() => toaster.success({ title: 'Código PIX copiado com sucesso' }))
            .catch(() => toaster.error({ title: 'Erro ao copiar o código PIX' }));
    };

    return (
        <Flex
            flexDir={'column'}
            justify={'center'}
            align={'center'}
            gap={8}
            bg={'#1A2855'}
            pb={8}
            color={'white'}
            px={4}
            textAlign={'center'}
            minH={'70vh'}
        >
            <Text fontWeight={500}>
                Para fazer sua doação através do PIX, escaneie o QR Code abaixo através do seu aplicativo do banco
            </Text>
            <QrCode value={pixCode} size={'xl'} fill={'white'} />
            <Text fontWeight={500}>Ou copie o código e cole no seu aplicativo do banco: </Text>
            <Button
                mt={4}
                rounded={'full'}
                fontSize={'lg'}
                bg={'#0D3D71'}
                _hover={{ bg: '#1B4D85' }}
                color={'white'}
                w="fit-content"
                fontWeight={700}
                onClick={handleCopy}
            >
                <FaRegCopy />
                COPIAR CÓDIGO PIX
            </Button>
            <Separator w="full" borderColor={'blue.800'} mb={10} />
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
