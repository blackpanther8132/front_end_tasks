import MainApp from '../app/Modules/MainApp/MainApp';

export default function* saga() {
    try {
        yield [
            MainApp.saga(),
        ];
    } catch (error) {
        return;
    }
}