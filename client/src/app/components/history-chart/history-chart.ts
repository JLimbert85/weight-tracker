import { Component, effect, inject, signal } from '@angular/core';
import * as echarts from 'echarts/core';
import { EChartsCoreOption } from 'echarts/core';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import { LineChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  MarkLineComponent,
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
]);

@Component({
  imports: [NgxEchartsDirective, MatCardModule],
  selector: 'app-history-chart',
  styleUrl: './history-chart.css',
  templateUrl: './history-chart.html',
  providers: [provideEchartsCore({ echarts })],
})
export class HistoryChart {
  weightService = inject(WeightService);
  updateOptions = signal<EChartsCoreOption>({});

  constructor() {
    effect(() => {
      const weights = this.weightService.weights();
      this.updateOptions.set({
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
            data: weights.map((weight) => weight.weight).reverse(),
            smooth: true,
            markLine: {
              data: [
                {
                  yAxis: this.weightService.goalWeight(),
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
              ],
              symbol: ['none', 'none'],
            },
          },
        ],
      });
    });
  }

  chartOptions: EChartsCoreOption = {
    grid: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      containLabel: true, // Keeps axis labels visible while removing extra padding
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: [
      {
        type: 'category',
        data: this.weightService
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
        data: this.weightService
          .weights()
          .map((weight) => weight.weight)
          .reverse(),
        smooth: true,
        markLine: {
          data: [
            {
              yAxis: this.weightService.goalWeight(),
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
          ],
          symbol: ['none', 'none'],
        },
      },
    ],
  };
}
