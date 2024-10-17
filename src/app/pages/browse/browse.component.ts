import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../shared/service/auth.service';
import { HeaderComponent } from '../../core/components/header/header.component';
import { BannerComponent } from '../../core/components/banner/banner.component';
import { MovieService } from '../../shared/service/movie.service';
import { MovieCarouselComponent } from '../../shared/components/movie-carousel/movie-carousel.component';
import { IVideoContent } from '../../shared/interface/IVideoContent';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [
    HeaderComponent,
    BannerComponent,
    MovieCarouselComponent,
    AsyncPipe,
  ],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css',
})
export class BrowseComponent implements OnInit {
  authService = inject(AuthService);

  movieService = inject(MovieService);

  name = JSON.parse(sessionStorage.getItem('loginUser')!).name;
  profile = JSON.parse(sessionStorage.getItem('loginUser')!).picture;
  email = JSON.parse(sessionStorage.getItem('loginUser')!).email;
  bannerDetails$: Observable<any> = new Observable<any>();
  bannerVideo$: Observable<any> = new Observable<any>();

  movies: IVideoContent[] = [];
  tvShows: IVideoContent[] = [];
  ratedMovies: IVideoContent[] = [];
  nowPlayingMovies: IVideoContent[] = [];
  popularMovies: IVideoContent[] = [];
  topRatedMovies: IVideoContent[] = [];
  upcomingMovies: IVideoContent[] = [];

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((res: any) => {
      this.bannerDetails$ = this.movieService.getBannerDetail(res.results[1].id);
      this.bannerVideo$ = this.movieService.getBannerVideo(res.results[1].id);
      this.movies = res.results;
    });
    this.movieService.getTvShows().subscribe((res: any) => {
      this.tvShows = res.results;
    });
    this.movieService.getRatedMovies().subscribe((res: any) => {
      this.ratedMovies = res.results;
    });
    this.movieService.getNowPlayingMovies().subscribe((res: any) => {
      this.nowPlayingMovies = res.results;
    });
    this.movieService.getUpcomingMovies().subscribe((res: any) => {
      this.popularMovies = res.results;
    });
    this.movieService.getPopularMovies().subscribe((res: any) => {
      this.topRatedMovies = res.results;
    });
    this.movieService.getTopRated().subscribe((res: any) => {
      this.upcomingMovies = res.results;
    });
  }
  signOut() {
    sessionStorage.removeItem('loginUser');
    this.authService.signOut();
  }
}
