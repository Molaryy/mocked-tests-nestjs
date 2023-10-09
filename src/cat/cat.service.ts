import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';
@Injectable()
export class CatService {
    private readonly breedsURL: string = "https://api.thecatapi.com/v1/breeds";

    private async getAllBreeds() {
        try {
            const response = await fetch(this.breedsURL, {
                method: 'GET',
                headers: {
                    'Content-type':'application/json'
                }
            });
            return await response?.json();
        } catch (error) {
            console.error('Failed to fetch breeds', error);
            throw error;
        }
    }

    async getBreeds() {
        return await this.getAllBreeds();
    }

    async getBreed(breed: string) {
        const breeds = await this.getAllBreeds();
        const breedsArray = [];

        if (breeds === null || breeds === undefined) {
            return;
        }

        for (const obj in breeds) {
            breedsArray.push(breeds[obj]);
        }

        return breedsArray.find(brd => brd.name === breed) ? breedsArray.find(brd => brd.name === breed).name : breedsArray.find(brd => brd.id === breed).name
    }
}
