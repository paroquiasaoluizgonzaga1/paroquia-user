import { Flex, Image, useDisclosure } from '@chakra-ui/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import './styles.css';
import { useState } from 'react';
import { NewsImageModal } from '../news-image-modal';

interface INewsImagesSlideProps {
    images: string[];
}

export function NewsImagesSlide({ images }: INewsImagesSlideProps) {
    const { open, onClose, onOpen } = useDisclosure();

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleOpenImageModal = (image: string) => {
        setSelectedImage(image);
        onOpen();
    };

    const handleCloseImageModal = () => {
        setSelectedImage(null);
        onClose();
    };

    return (
        <Flex flexDir={'column'} align={'center'} textAlign={'center'} py={4} maxW={'1200px'}>
            <Flex align={'center'} justify={'center'}>
                <Swiper
                    effect={'coverflow'}
                    centeredSlides={true}
                    navigation={true}
                    pagination={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 40,
                        depth: 80,
                        modifier: 5,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_rooms"
                >
                    {images.map((image, idx) => (
                        <SwiperSlide key={idx} onClick={() => handleOpenImageModal(image)}>
                            <Flex
                                rounded={'3xl'}
                                zIndex={100}
                                shadow={'lg'}
                                bg={'white'}
                                aspectRatio={'1'}
                                justify={'center'}
                                align={'center'}
                            >
                                <Image src={image} />
                            </Flex>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Flex>
            {selectedImage && <NewsImageModal image={selectedImage} isOpen={open} onClose={handleCloseImageModal} />}
        </Flex>
    );
}
