import { GoBridgeInterface } from "./GoBridgeInterface";

class NoopGoBridge implements GoBridgeInterface {
  initBridge() {
    return Promise.reject();
  }

  closeBridge() {
    return Promise.reject();
  }

  hello(_: string) {
    return Promise.reject();
  }

  createReply(_: string, __: string) {
    return Promise.reject();
  }

  exportJsonConfig() {
    return Promise.reject();
  }
}

export const GoBridge: GoBridgeInterface = new NoopGoBridge();
