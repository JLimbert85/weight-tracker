import {
  AfterViewInit,
  Component,
  effect,
  ElementRef,
  inject,
  signal,
  ViewChild,
  viewChild,
} from '@angular/core';
import * as echarts from 'echarts/core';
import { EChartsCoreOption } from 'echarts/core';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import { LineChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  MarkLineComponent,
  VisualMapComponent,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { WeightService } from '../../services/weight-service';
import { MatCardModule } from '@angular/material/card';
echarts.use([
  LineChart,
  CanvasRenderer,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  MarkLineComponent,
  VisualMapComponent,
]);

@Component({
  imports: [NgxEchartsDirective, MatCardModule],
  selector: 'app-history-chart',
  styleUrl: './history-chart.css',
  templateUrl: './history-chart.html',
  providers: [provideEchartsCore({ echarts })],
})
export class HistoryChart implements AfterViewInit {
  weightService = inject(WeightService);
  @ViewChild('chartContainer') chartContainer!: ElementRef;
  chartInstance: echarts.ECharts | undefined;
  resizeObserver: ResizeObserver | undefined;

  constructor() {
    effect(() => {
      const weights = this.weightService.weights();
      const goalWeight = this.weightService.goalWeight();

      if (this.chartInstance) {
        this.chartInstance.setOption({
          title: {
            show: weights.length <= 0,
            text: 'No weight data available',
            left: 'center',
            top: 'center',
          },
          grid: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            outerBoundsMode: 'same', // Keeps axis labels visible while removing extra padding
          },
          tooltip: {
            trigger: 'axis',
          },
          xAxis: [
            {
              type: 'category',
              data: weights.map((weight) => new Date(weight.recordedDate).toDateString()).reverse(),
            },
          ],
          yAxis: [
            {
              type: 'value',
            },
          ],
          series: [
            {
              name: 'Weight',
              type: 'line',
              data: weights.length <= 0 ? [] : weights.map((weight) => weight.weight).reverse(),
              smooth: true,
              markLine: {
                data:
                  goalWeight !== undefined
                    ? [
                        {
                          yAxis: goalWeight ? goalWeight : 0,
                          name: 'Goal Weight',
                          label: {
                            position: 'middle',
                            text: 'Goal Weight',
                            formatter: 'Goal Weight: {c}',
                            fontWeight: 'bold',
                            fontSize: 16,
                          },
                          lineStyle: {
                            width: 2,
                            type: 'solid',
                            color: 'green',
                          },
                        },
                      ]
                    : [],
                symbol: ['none', 'none'],
              },
            },
          ],
        });
      }
    });
  }

  ngAfterViewInit() {
    this.chartInstance = echarts.init(this.chartContainer.nativeElement);

    const chartOptions = {
      title: {
        show: this.weightService.weights().length <= 0,
        text: 'No weight data available',
        left: 'center',
        top: 'center',
      },
      grid: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        outerBoundsMode: 'same', // Keeps axis labels visible while removing extra padding
      },
      tooltip: {
        trigger: 'axis',
      },
      xAxis: [
        {
          type: 'category',
          data:
            this.weightService.weights().length <= 0
              ? []
              : this.weightService
                  .weights()
                  .map((weight) => new Date(weight.recordedDate).toDateString())
                  .reverse(),
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: 'Weight',
          type: 'line',
          data:
            this.weightService.weights().length <= 0
              ? []
              : this.weightService
                  .weights()
                  .map((weight) => weight.weight)
                  .reverse(),
          smooth: true,
          markLine: {
            data:
              this.weightService.goalWeight() !== undefined
                ? [
                    {
                      yAxis: this.weightService.goalWeight() ? this.weightService.goalWeight() : 0,
                      name: 'Goal Weight',
                      label: {
                        position: 'middle',
                        text: 'Goal Weight',
                        formatter: 'Goal Weight: {c}',
                        fontWeight: 'bold',
                        fontSize: 16,
                      },
                      lineStyle: {
                        width: 2,
                        type: 'solid',
                        color: 'green',
                      },
                    },
                  ]
                : [],
            symbol: ['none', 'none'],
          },
        },
      ],
    };

    this.chartInstance.setOption(chartOptions);

    this.resizeObserver = new ResizeObserver(() => {
      this.chartInstance?.resize();
    });
    this.resizeObserver.observe(this.chartContainer.nativeElement);
  }

  ngOnDestroy() {
    this.resizeObserver?.disconnect();
    this.chartInstance?.dispose();
  }
}
