import { Image } from '@chakra-ui/react';
import { DialogBody, DialogCloseTrigger, DialogContent, DialogFooter, DialogRoot } from '../ui/dialog';
import { useRef } from 'react';
import { Button } from '../ui/button';

export function NewsImageModal({ image, onClose, isOpen }: { image: string; onClose: () => void; isOpen: boolean }) {
    const cancelRef = useRef<HTMLButtonElement>(null);

    return (
        <DialogRoot open={isOpen} size={['sm', 'md', 'lg', 'xl']}>
            <DialogContent>
                <DialogBody>
                    <Image src={image} />
                </DialogBody>
                <DialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                        Fechar
                    </Button>
                </DialogFooter>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    );
}
