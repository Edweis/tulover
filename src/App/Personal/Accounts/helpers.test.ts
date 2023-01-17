import { describe, expect, it } from 'vitest';
import { capitalize, toCurrency } from './helpers.js';

describe('toCurrency', () => {
    it('should work for SGD', () => {
        const { int, dec, name, symbol } = toCurrency('SGD', 1234567.89);
        expect(int).toEqual('1,234,567');
        expect(dec).toEqual('89');
        expect(name).toEqual('Singapore dollars');
        expect(symbol).toEqual('$');
    });
    it('should work for SGD', () => {
        const { int, dec, name, symbol } = toCurrency('EUR', 1234567.89);
        expect(int).toEqual('1,234,567');
        expect(dec).toEqual('89');
        expect(name).toEqual('Euros');
        expect(symbol).toEqual('€');
    });
});

describe('capitalize', () => {
    it('Should work for Hello', () => {
        expect(capitalize('hello')).toEqual('Hello');
        expect(capitalize('Hello')).toEqual('Hello');
    });
});
