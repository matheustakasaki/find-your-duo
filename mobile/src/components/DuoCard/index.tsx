import { View } from 'react-native';
import { DuoInfo } from '../DuoInfo'
import { styles } from './styles';


export interface DuoCardProps {
    hourEnd: string,
    hourStart: string,
    id: string,
    name: string,
    useVoiceChannel: boolean,
    weekDays: string[],
    yearsPlaying: number,
}


interface Props {
    data: DuoCardProps;
}
export function DuoCard({ data }: Props) {
    return (
        <View style={styles.container}>

            <DuoInfo label='Nome' value={data.name} />
            <DuoInfo label='Nome' value={`${data.yearsPlaying} ano(s)`} />
            <DuoInfo label='Nome' value={`${data.weekDays.length} dias`} />
            <DuoInfo label='Nome' value={``} />

        </View>
    );
}