import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IVideoContent } from '../interface/IVideoContent';

const options = {
  params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc',
  },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer ' +
      'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2FjOTNkMjU4M2M2YzkxZDFiNWZmM2VmOTczNmZlNSIsIm5iZiI6MTcyOTE0OTk3NC4wODc2MzcsInN1YiI6IjY3MGY1ZjQxNTQ3ZGU0YTc0ZjYwYzQyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._yPax1xCFZN-lGbFqroeSsUalZEDuYnZPXahIOlHy5g',
  },
};
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor() {}

  http = inject(HttpClient);

  getMovies() {
    return this.http.get(
      'https://api.themoviedb.org/3/discover/movie',
      options
    );
  }

  getTvShows() {
    return this.http.get('https://api.themoviedb.org/3/discover/tv', options);
  }

  getRatedMovies() {
    return this.http.get(
      'https://api.themoviedb.org/3/guest_session/guest_session_id/rated/movies',
      options
    );
  }

  getBannerImage(id: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}/images`,
      options
    );
  }

  getBannerVideo(id: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      options
    );
  }

  getBannerDetail(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}`, options);
  }

  getNowPlayingMovies() {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/now_playing',
      options
    );
  }

  getPopularMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular', options);
  }

  getTopRated() {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/top_rated',
      options
    );
  }

  getUpcomingMovies() {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/upcoming',
      options
    );
  }
}
