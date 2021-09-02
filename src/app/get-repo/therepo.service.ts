import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TherepoService {

  private repository!: string;
  private token = environment.apiKey;
  private clientId = environment.clientId;
  private clientSecret = environment.clientSecret;

  constructor(private http: HttpClient) { }

  getRepoData() {
    return this.http.get(`https://api.github.com/search/repositories?q=${this.repository}&client_secret=${this.clientSecret}`)
  }

  updateFields(repository: string) {
    this.repository = repository;
  }
}
