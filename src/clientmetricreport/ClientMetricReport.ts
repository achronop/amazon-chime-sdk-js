// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import MetricReport from './MetricReport';

/**
 * [[ClientMetricReport]] gets the media metrics used by ConnectionMonitor to
 * update connection health data.
 */
export default interface ClientMetricReport {
  /**
   * Gets raw client media metrics
   */
  getObservableMetrics(): { [id: string]: number };

  /**
   * Gets video upstream client media metrics
   */
  getVideoUpstreamMetrics(): { [key: string]: MetricReport };

  /**
   * Gets video downstream client media metrics
   */
  getVideoDownstreamMetrics(): { [key: string]: MetricReport };

  /**
   * Gets audio upstream client media metrics
   */
  getAudioUpstreamMetrics(): { [key: string]: MetricReport };

  /**
   * Gets audio downstream client media metrics
   */
  getAudioDownstreamMetrics(): { [key: string]: MetricReport };
}
