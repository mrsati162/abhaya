import { RtaRoutingModule } from './rta-routing.module';

describe('RtaRoutingModule', () => {
  let rtaRoutingModule: RtaRoutingModule;

  beforeEach(() => {
    rtaRoutingModule = new RtaRoutingModule();
  });

  it('should create an instance', () => {
    expect(rtaRoutingModule).toBeTruthy();
  });
});
