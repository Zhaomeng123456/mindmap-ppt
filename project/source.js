export const sourceMarkdown = `
- 相机可靠性测试
  2149h 全项目测试蓝图
  @image overview-structure.svg
    - 环境适应性
      五大项极端条件验证 (122h)
      @image env-test-grid.svg
        - 高温工作
          验证高温下功能正常 · 27h · 2pcs
        - 温循非工作
          储存后恢复能力 · 18h · 1pcs
        - EMC 电磁兼容
          委托外部实验室 · 72h · 待确认
        - 包装跌落
          运输防护能力 · 2h · 建议委外
        - 包装运输振动
          模拟长途运输 · 3h · 建议委外
    - 可靠性激发
      HALT 步进高温找极限 (5h)
        - 步进高温至失效
          50% 失效率判定 · 2pcs · 口径待确认
    - 长期寿命
      加速模拟全生命周期 (2022h)
      @image life-test-timeline.svg
        - 温循加速寿命
          8年寿命假设验证 · 189h · 4pcs
        - 反复开关
          需自动化流程开发 · 1833h · 1pcs
    - 老化筛选
      出厂前的质量闸门 (101h)
      @image screening-flow.svg
        - 温循老化筛选
          ALL 样品全检 · 28h · 是否作为出厂检验
        - 高温老化筛选
          ALL 样品全检 · 23h · 是否作为出厂检验
        - 反复上下电
          是否与开关测试合并 · 50h · 1pcs
`;
