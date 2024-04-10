
import { ServerApp } from './presentation/server-app';

describe('App', () => {
    
    test('should call Serer.run with values', async() => {

        const serverRunMock = jest.fn();

        ServerApp.run = serverRunMock;

        process.argv = ['node', 'app.ts', '-b', '10', '-l', '5', '-s', '-n', 'test-file', '-d', 'file-destination'];

        await import('./app');

        expect(serverRunMock).toHaveBeenCalledWith({
            base: 10,
            limit: 5,
            showTable: true,
            destination: 'file-destination',
            name: 'test-file'
        });
    });
});