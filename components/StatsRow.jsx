import { View, Text, StyleSheet } from 'react-native';
import { C, S, R } from '../theme';

function getMotivation(done, total) {
  if (total === 0) return 'Add tasks to get started 🚀';
  if (done === 0) return "Let's get moving! 💪";
  if (done === total) return 'All done — amazing work! 🎉';
  if (done / total >= 0.7) return 'Almost there, keep going! 🔥';
  if (done / total >= 0.4) return 'Good progress, stay focused! ⚡';
  return 'Nice start, keep it up! 👊';
}

export default function StatsRow({ tasks = [], selectedDate }) {
  const list = tasks.filter((t) => !t.date || t.date === selectedDate);
  const total = list.length;
  const done = list.filter((t) => t.completed).length;
  const started = list.filter((t) => t.started && !t.completed).length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <View style={styles.card}>
      {/* Top row: 3 stat pills */}
      <View style={styles.statsRow}>
        <View style={styles.statPill}>
          <Text style={styles.statNum}>{total}</Text>
          <Text style={styles.statLabel}>Total</Text>
        </View>
        <View style={[styles.statPill, styles.statPillAmber]}>
          <Text style={[styles.statNum, { color: C.amber }]}>{started}</Text>
          <Text style={[styles.statLabel, { color: C.amber }]}>In Progress</Text>
        </View>
        <View style={[styles.statPill, styles.statPillGreen]}>
          <Text style={[styles.statNum, { color: C.green }]}>{done}</Text>
          <Text style={[styles.statLabel, { color: C.green }]}>Done</Text>
        </View>
      </View>

      {/* Progress bar */}
      <View style={styles.progressRow}>
        <View style={styles.progressOuter}>
          <View style={[styles.progressInner, { width: `${pct}%` }]} />
        </View>
        <Text style={styles.pctLabel}>{pct}%</Text>
      </View>

      {/* Motivational line */}
      <Text style={styles.motivation}>{getMotivation(done, total)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: C.surface,
    marginHorizontal: S.lg,
    marginTop: S.md,
    marginBottom: S.sm,
    borderRadius: R.lg,
    padding: S.lg,
    borderWidth: 1,
    borderColor: C.border,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  statsRow: {
    flexDirection: 'row',
    gap: S.sm,
    marginBottom: S.md,
  },
  statPill: {
    flex: 1,
    backgroundColor: C.bg,
    borderRadius: R.sm,
    paddingVertical: S.sm,
    alignItems: 'center',
  },
  statPillAmber: { backgroundColor: C.amberBg },
  statPillGreen: { backgroundColor: C.greenBg },
  statNum: {
    fontSize: 20,
    fontWeight: '800',
    color: C.text,
    letterSpacing: -0.5,
  },
  statLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: C.textSub,
    marginTop: 1,
    letterSpacing: 0.3,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: S.sm,
  },
  progressOuter: {
    flex: 1,
    height: 7,
    backgroundColor: C.border,
    borderRadius: R.full,
    overflow: 'hidden',
  },
  progressInner: {
    height: 7,
    backgroundColor: C.primary,
    borderRadius: R.full,
  },
  pctLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: C.primary,
    minWidth: 32,
    textAlign: 'right',
  },
  motivation: {
    fontSize: 12,
    color: C.textSub,
    marginTop: S.sm,
    fontWeight: '500',
  },
});