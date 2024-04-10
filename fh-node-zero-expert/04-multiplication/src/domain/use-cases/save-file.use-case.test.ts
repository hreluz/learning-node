import fs from "fs";
import { SaveFile } from "./save-file.use-case";

describe('SaveFileUseCase', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    afterEach(() => {
        if (fs.existsSync('outputs')) {
            fs.rmdirSync('outputs', {recursive: true});
        }

        if (fs.existsSync('custom-outputs')) {
            fs.rmdirSync('custom-outputs', {recursive: true});
        }
    });

    const customOptions = {
        fileContent: 'custom content',
        fileDestination: 'custom-outputs/file-destination',
        fileName: 'custom-table-name'
    };


    test('should save file with default values', () => {
        const saveFile = new SaveFile();
        const filePath = 'outputs/table.txt';

        const options = {
            fileContent: 'test content'
        };

        const result = saveFile.execute(options);

        const fileExists = fs.existsSync(filePath);

        const fileContent = fs.readFileSync(filePath, {encoding: 'utf-8'});

        expect(result).toBeTruthy();
        expect(fileExists).toBe(true);
        expect(fileContent).toBe(options.fileContent);
    });


    test('should save file with custom values', () => {

        const filePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`;

        const saveFile = new SaveFile();

        const result = saveFile.execute(customOptions);

        const fileExists = fs.existsSync(filePath);

        const fileContent = fs.readFileSync(filePath, {encoding: 'utf-8'});

        expect(result).toBeTruthy();
        expect(fileExists).toBe(true);
        expect(fileContent).toBe(customOptions.fileContent);
    });

    test('should return false if directory could not be created', () => {

        const saveFile = new SaveFile();

        const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(
            () => {
                throw new Error('This is a custom error message from testing');
            }
        );

        const result = saveFile.execute(customOptions);

        expect(result).toBe(false);

        mkdirSpy.mockRestore()
    });

    test('should return false if file could not be created', () => {

        const saveFile = new SaveFile();

        const writeFileSync = jest.spyOn(fs, 'writeFileSync').mockImplementation(
            () => {
                throw new Error('This is a custom error message from testing');
            }
        );

        const result = saveFile.execute({fileContent: 'hola'});

        expect(result).toBe(false);

        writeFileSync.mockRestore();
    });
});