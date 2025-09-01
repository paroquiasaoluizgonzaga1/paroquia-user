import { Flex, Text } from '@chakra-ui/react';

export function Footer() {
    return (
        <Flex
            fontWeight={600}
            color={'blue.900'}
            fontSize={'sm'}
            justify={'center'}
            align={'center'}
            bg={'white'}
            py={4}
            w="full"
            flexDir={'column'}
        >
            <Text>© 2025 Paróquia São Luiz Gonzaga</Text>
            <Text>Todos os direitos reservados</Text>
        </Flex>
    );
}
