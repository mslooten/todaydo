import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RoughSVG } from 'roughjs/bin/svg';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements AfterViewInit {
  @ViewChild('svg')
  svg!: ElementRef;

  @ViewChild('growDiv')
  growDiv!: ElementRef;

  private seed: number = Math.random() * 100;

  ngAfterViewInit(): void {
    const x = this.growDiv.nativeElement.clientWidth;
    const y = this.growDiv.nativeElement.clientHeight;
    this.draw(x, y);
  }

  private draw(x: number, y: number) {
    console.log(x, y);

    const canvas = this.svg.nativeElement as SVGSVGElement;
    let rc = new RoughSVG(canvas);
    const rect = rc.rectangle(10, 10, x + 32, y + 32, {
      roughness: 2,
      bowing: 1,
      strokeWidth: 1.2,
      seed: this.seed,
      fill: '#e0e0ff',
    });
    canvas.replaceChildren(rect);
    canvas.setAttribute('width', `${x + 32}`);
    canvas.setAttribute('height', `${y + 32}`);
  }

  grow(event: KeyboardEvent): void {
    const target = event.target as HTMLElement;
    const width = target.clientWidth;
    const height = target.clientHeight;
    this.draw(width, height);
  }
}
