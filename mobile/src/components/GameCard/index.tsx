import { TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { THEME } from '../../theme';

// Exporta essa para reaproveitar em outros lugares
export interface GameCardProps {
    id: string,
    title: string,
    _count: { ads: number },
    bannerUrl: string
}

// Interface para uso interno deste componente
interface Props extends TouchableOpacityProps {
    data: GameCardProps
}

export function GameCard({ data, ...rest }: Props) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <ImageBackground style={styles.cover} source={{ uri: data.bannerUrl }} >
                <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer} >

                    <Text style={styles.name}>
                        {data.title}
                    </Text>
                    <Text style={styles.ads}>
                        {data._count.ads}
                    </Text>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    );
}