import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';;


@Injectable({
  providedIn: 'root'
})

export class SpotifyService {


  getHeader(query: string) {
    const url = environment.baseUrl + 'search?q=' + query;
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer BQByPbfOCEolpW8bM56MGjV3F0hwUpB-dv0Nw_Sja2lCR8TCRrKGnk0gqgVmqRbsLtjUA2mBKRCPiEGPrH6lRlkAwQecc6cMeO2pB9pzNaOkOxFEa5ybVj3I8oLD0Z_0aTJzJ8rHdscql-Ltwh2nYSMKM1JqhPH9twhTumx6MC-2MX-76kRwxhaeqE61eMJOrk2tVIVEVvA4kv__P_GQId0jFYG1gX5s8Lx_nrMcLqtCXDOzWbvnVViCfkfOHIlRH9xmaSiKuy-gRw1oQACkCahzBCbzfF8cYfM');

    return this.http.get(url, { headers });
  }

  constructor(private http: HttpClient) { }

  searchMusic(str: string, type = 'artist') {
    const param = '&offset=0' + '&limit=20' + '&type=' + type + '&market=US';
    const query = str + param;
    return this.getHeader(query);
  }
  getArtistdetails(id: string) {
    const query = 'artists/${id}';
    return this.getArtistdetails(query);
  }
}

